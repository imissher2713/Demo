// window
// window innerheight, window innerwidth: Dài và rộng của tài liệu
// window.open(url, name, options): Mở ra 1 cửa sổ mới theo url
// window.close()
// ex: 
// const openTab = () => {
//     window.open('https://viblo.asia/p/tim-hieu-ve-dom-va-bom-trong-lap-trinh-web-GrLZD9QVlk0', '_blank', 'width=1200, height = 600');
// }
// let tab = window.open('https://viblo.asia/p/tim-hieu-ve-dom-va-bom-trong-lap-trinh-web-GrLZD9QVlk0', '_blank', 'width=1200, height = 600');
// const close = () => {
//     tab.close()
//     console.log("Hello")
// }
// window.url()
// location
// history: truy vet lich su web
// navgivator
// cookie
let getNameCookie = function(cookie, name){
    let arr = cookie.split(';')
    for(let i in arr){
        let str = i
        if(str[0] == ' '){
            str = str.substring(1)
        }
    }
}
