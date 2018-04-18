import _ from 'lodash';

export default function(errors) {
    const result = {};
    _forEach(errors, (val, key) => {
        result[key] = val.message;
    })

    return result;
}