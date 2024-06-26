import { hasOwnProperty, isObject } from '../../utils';
import type { HTTPClientErrorPayload } from './types';

export function isAPIClientErrorPayload(input: unknown) : input is HTTPClientErrorPayload {
    if (
        !isObject(input) ||
        !hasOwnProperty(input, 'issues') ||
        !Array.isArray(input.issues)
    ) {
        return false;
    }

    for (let i = 0; i < input.issues.length; i++) {
        const issue = input.issues[i];

        if (
            !isObject(issue) ||
            !hasOwnProperty(issue, 'severity') ||
            !hasOwnProperty(issue, 'details')
        ) {
            return false;
        }
    }

    return true;
}
