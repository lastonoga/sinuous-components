import { observable, computed } from 'sinuous/observable';
import { map } from '@sinuous/render';

export default function loop(context, condition, getKey, getItem)
{
	return map(context, condition, getKey, getItem);
}