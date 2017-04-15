'use strict';

function MySet() {
    
    const set = [];

    const _getLength = (aSet) => {
        let i = 0;
        while (true) {
            if (aSet[i] === undefined) {
                return i;
            }
            i++;
        }
    };

    const _indexOf = (aSet, el) => {
        const len = this.length();
        for (let i = 0; i < len; i++) {
            if (el === aSet[i]) {
                return i;
            }
        }
        return -1;
    };

    const _contains = (aSet, el) => {
        if (_indexOf(aSet, el) > -1) {
            return true;
        }
        return false;
    };

    this.length = () => _getLength(set);

    this.contains = (el) => {
        return _contains(set, el);
    };

    this.add = (el) => {
        if (!this.contains(el)) {
            set.push(el);
        }
        return set;
    };

    this.remove = (el) => {
        let index = _indexOf(set, el);
        set[index] = null;
        const len = this.length();
        for (index; index < len; index++) {
            set[index] = set[index + 1];
        }
        return set;
    };

    this.union = (other) => {
        const union = new MySet();
        const len = _getLength(other.toArray());
        for (let i = 0; i < len; i++) {
            if (this.contains(other.toArray()[i])) {
                union.add(other.toArray()[i]);
            }
        }
        return union;
    };

    this.intersect = (other) => {
        const intersection = new MySet();
        const len = Math.max(this.length(), _getLength(other.toArray()));
        for (let i = 0; i < len; i++) {
            if (set[i] !== undefined) {
                intersection.add(set[i]);
            }
            if (other.toArray()[i] !== undefined) {
                intersection.add(other.toArray()[i]);
            }
        }
        return intersection;
    };

    this.difference = (other) => {
        const diff = new MySet();
        const len = this.length();
        for (let i = 0; i < len; i++) {
            if (!other.contains(set[i])) {
                diff.add(set[i]);
            }
        }
        return diff;    
    };
    
    this.isSubsetOf = (other) => {
        const len = this.length();
        for (let i = 0; i < len; i++) {
            if (!other.contains(set[i])) {
                return false;
            }
        }
        return true;
    };

    this.toString = () => {
        let string = "[";
        const len = this.length();
        for (let i = 0; i < len; i++) {
            if (typeof set[i] === 'string') {
                string += `"${set[i]}"`;
            } else {
                string += set[i];
            }
            if (i + 1 < len) {
                string += ',';
            }
        }
        string += "]";
        return string;
    };

    this.toArray = () => {
        return set;
    };
}

module.exports = MySet;
