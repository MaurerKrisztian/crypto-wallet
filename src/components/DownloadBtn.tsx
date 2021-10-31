import React from 'react';

function DownloadBtn(props: any) {
    const fileName: string = props.fileName
    const fileContent: string = props.fileContent
    const buttonName: string = props.buttonName

    const downloadTxtFile = () => {
        const element = document.createElement("a");
        const file = new Blob([fileContent],
            {type: 'text/plain;charset=utf-8'});
        element.href = URL.createObjectURL(file);
        element.download = fileName;
        document.body.appendChild(element);
        element.click();
    }

    return (
        <div className="DownloadBtn">
            <button onClick={downloadTxtFile}>{buttonName}</button>
        </div>
    );
}

export default DownloadBtn;
