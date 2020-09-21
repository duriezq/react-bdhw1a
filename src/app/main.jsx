import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Upload } from '@progress/kendo-react-upload';
import  {AzureStorageBlob} from "@azure/storage-blob";
const { StorageSharedKeyCredential, BlobServiceClient } = require("@azure/storage-blob");



class App extends React.Component {

    render() {
        return (
            <Upload
                batch={false}
                multiple={true}
                defaultFiles={[]}
                withCredentials={false}
                saveUrl={'https://demos.telerik.com/kendo-ui/service-v4/upload/save'}
                removeUrl={'https://demos.telerik.com/kendo-ui/service-v4/upload/remove'}
                onAdd={(ev) => console.log(ev.target)}
            />
        );
    }
}




ReactDOM.render(
    <App />,
    document.querySelector('my-app')
);