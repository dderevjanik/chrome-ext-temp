type x = typeof chrome.storage.local;

class MemStorage implements x {

    private _store: { [key: string]: unknown } = {};
    public QUOTA_BYTES: number;

    constructor() {
        this.QUOTA_BYTES = 8_192;
    }

    clear() {
        this._store = {};
    }

    get(key: string, cb: (value: unknown) => void) {
        cb(this._store[key]);
    }

    getBytesInUse() {

    }

    remove() {

    }

    set() {

    }

}
