import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { Upload, UploadFile } from './upload'
// import Button from '../Button/button'
import Icon from '../Icon/icon'
const defaultFileList: UploadFile[] = [
  { uid: '123', size: 1234, name: 'hello.md', status: 'uploading', percent: 30 },
  { uid: '122', size: 1234, name: 'xyz.md', status: 'success', percent: 100 },
  { uid: '121', size: 1234, name: 'eyiha.md', status: 'error', percent: 0 }
]
const SimpleUpload = () => {
  // const checkFileSize = (file: File) => {
  //   if (Math.round(file.size / 1024) > 50) {
  //     alert(123)
  //     return false
  //   }
  //   return true
  // }
  // const filePromise = (file: File) => {
  //   const newFile = new File([file], 'new_name.doc', { type: file.type })
  //   return Promise.resolve(newFile)
  // }
  return (
    <Upload
      action="https://jsonplaceholder.typicode.com/posts"
      // action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
      onChange={action('changed')}
      defaultFileList={defaultFileList}
      name="fileName"
      data={{ 'key': 'value' }}
      headers={{ 'X-Powered-By': 'wj' }}
      accept=".jpg"
      multiple
      drag
    // beforeUpoload={filePromise}
    // onProgress={action('progress')}
    // onSuccess={action('Success')}
    // onError={action('error')}
    >
      <Icon icon="upload" size="5x" theme="secondary" />
      <br />
      <p>Drag file over to upload</p>
    </Upload>
  )
}

storiesOf('upload component', module)
  .add('Upload', SimpleUpload)