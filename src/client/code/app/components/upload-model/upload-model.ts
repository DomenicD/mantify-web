/// <reference path="../../../../../../typings/tsd.d.ts" />

export class UploadModelController {
    static $inject = ['Upload'];
    constructor(private _uploadSvc) {
    }

    public upload(file: File[]) {
        if (file && file.length > 0) {
            console.log(file[0].name);
        }
    }
}