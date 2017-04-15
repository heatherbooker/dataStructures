'use strict';

function MySet() {
    
    this.set = [];

    const getLength = (aSet) => {
        let i = 0;
        while (true) {
            if (aSet[i] === undefined) {
                return i;
            }
            i++;
        }
    };

    const contains = (aSet, el) => {
        if (this.indexOf(aSet, el) > -1) {
            return true;
        }
        return false;
    };

    this.length = () => getLength(this.set);

    this.indexOf = (aSet, el) => {
        const len = this.length();
        for (let i = 0; i < len; i++) {
            if (el === aSet[i]) {
                return i;
            }
        }
        return -1;
    };

    this.contains = (el) => {
        return contains(this.set, el);
    };

    this.add = (el) => {
        if (!this.contains(el)) {
            this.set.push(el);
        }
        return this.set;
    };

    this.remove = (el) => {
        let index = this.indexOf(this.set, el);
        this.set[index] = null;
        const len = this.length();
        for (index; index < len; index++) {
            this.set[index] = this.set[index + 1];
        }
        return this.set;
    };

    this.union = (other) => {
        const union = new MySet();
        const len = getLength(other.set);
        for (let i = 0; i < len; i++) {
            if (this.contains(other.set[i])) {
                union.add(other.set[i]);
            }
        }
        return union;
    };

    this.intersect = (other) => {
        const intersection = new MySet();
        const len = Math.max(this.length(), getLength(other.set));
        for (let i = 0; i < len; i++) {
            if (this.set[i] !== undefined) {
                intersection.add(this.set[i]);
            }
            if (other.set[i] !== undefined) {
                intersection.add(other.set[i]);
            }
        }
        return intersection;
    };

    this.difference = (other) => {
        const diff = new MySet();
        const len = this.length();
        for (let i = 0; i < len; i++) {
            if (!contains(other.set, this.set[i])) {
                diff.add(this.set[i]);
            }
        }
        return diff;    
    };
    
    this.isSubsetOf = (other) => {
        const len = this.length();
        for (let i = 0; i < len; i++) {
            if (!other.contains(this.set[i])) {
                return false;
            }
        }
        return true;
    };

    this.toString = () => {
        let string = "[";
        const len = this.length();
        for (let i = 0; i < len; i++) {
            if (typeof this.set[i] === 'string') {
                string += `"${this.set[i]}"`;
            } else {
                string += this.set[i];
            }
            if (i + 1 < len) {
                string += ',';
            }
        }
        string += "]";
        return string;
    };
}

module.exports = MySet;
