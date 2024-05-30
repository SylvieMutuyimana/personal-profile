const { useState } = require("react")

const Graphics = ()=>{
    const the_link = 'https://drive.google.com/file/d/108LSYBeDxSaybxMIPgI3bzpvem8kGtM-/view?usp=drive_link' 
    const [the_files, setFiles] = useState(null)
    const fetchFiles = async()=>{
        const the_files = await fetch(the_link) 
        if(the_files){
            console.log('the_files: ', )
        }
    }
}
