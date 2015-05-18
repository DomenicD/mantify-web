/// <reference path="../../../../../../typings/tsd.d.ts" />

export class UploadModelController {
    static $inject = ['Upload'];

    public fileName: string;

    constructor(private _uploadSvc) {
    }

    get showDragDropText(): boolean {
        return this.fileName ? false : true;
    }

    public upload(file: File[]) {
        if (file && file.length > 0) {
            this.fileName = file[0].name;
        }
    }
}