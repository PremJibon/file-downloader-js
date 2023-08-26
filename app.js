let fileInput = document.querySelector("input")
,downloadBtn = document.querySelector("button")

downloadBtn.addEventListener("click",function(e){
    e.preventDefault()
    downloadBtn.innerText = "Downlo0000ding..."
    fetchFile(fileInput.value)
})
function fetchFile(url){
    fetch(url).then(res => res.blob()).then(file =>{
        let tempUrl = URL.createObjectURL(file)
        let atag = document.createElement("a")
        atag.href = tempUrl
        atag.download = "file"
        document.body.appendChild(atag)
        atag.click()
        atag.remove()
        URL.revokeObjectURL(tempUrl)
        downloadBtn.innerText= "Download"
    }).catch(()=>{
        alert("পারলাম না ডাউনলোড করতি")
        downloadBtn.innerText = "Download"
    })
}