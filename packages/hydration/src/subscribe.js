import { computed, sample } from 'sinuous/observable';
import { getChildrenDeep } from 'sinuous/observable/src/utils.js';

let tracking;

function computedOnce(observer, value) {
    observer._update = update;

    let shouldRun = false;

    // if (tracking == null) {
    //   console.warn("computations created without a root or parent will never be disposed");
    // }

    resetUpdate(update);
    setTimeout(() => {
	    update();
	}, 100)

    function update() {
        const prevTracking = tracking;
        if (tracking) {
            tracking._children.push(update);
        }

        const prevChildren = update._children;

        _unsubscribe(update);
        update._fresh = true;
        tracking = update;

        
    	value = observer(value);

        // If any children computations were removed mark them as fresh.
        // Check the diff of the children list between pre and post update.
        prevChildren.forEach(u => {
            if (update._children.indexOf(u) === -1) {
                u._fresh = true;
            }
        });

        // If any children were marked as fresh remove them from the run lists.
        const allChildren = getChildrenDeep(update._children);
        allChildren.forEach(removeFreshChildren);

        console.log('start', allChildren);

        tracking = prevTracking;
        return value;
    }

    // Tiny indicator that this is an observable function.
    data.$o = true;
    function data() {
        if (update._fresh) {
            update._observables.forEach(o => o());
        } else {
            value = update();
        }

        return value;
    }

    return data;
}

function removeFreshChildren(u) {
  if (u._fresh) {
    u._observables.forEach(o => {
      if (o._runObservers) {
        o._runObservers.delete(u);
      }
    });
  }
}

function _unsubscribe(update) {
    update._children.forEach(_unsubscribe);
    update._observables.forEach(o => {
        o._observers.delete(update);
        if (o._runObservers) {
            o._runObservers.delete(update);
        }
    });
    update._cleanups.forEach(c => c());
    resetUpdate(update);
}

function resetUpdate(update) {
    // Keep track of which observables trigger updates. Needed for unsubscribe.
    update._observables = [];
    update._children = [];
    update._cleanups = [];
}

export default function subscribe(observer) {
    computedOnce(observer);
    // computed((value) => {
    // 	console.log(value)
    // 	// return observer();
    // })
    return () => _unsubscribe(observer._update);
}