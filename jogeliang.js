const data={
    pictures:{
        jogeliang:"./download3.jpg",
        liubey:"./download1.jpg",
        caocao:"./download.jpg",
        sunkuan:"./download2.jpg"
    },
    matns:{
        jogeliang:"استراتژیست افسانه ای دوران سه پادشاهی. مشاور ارشد و وفادار لیوبی پدشاه شو. به دلیل نبوغ بالا به اژدهای خفته معروف بود. نقش کلیدی در نبرد صخره سرخ داشت. باسیاست و دیپلماسی های دقیق شناخته می شود.نماد وفاداری،خردو مسئولیت پذیری در فرهنگ چین است تا پایان عمر برای بقای شو تلاش کرد. ",
        liubey:"بنیان گذار پادشاهی شو در دوران سه پادشاهی. ادعا می کرد از خاندان سلطنتی هان است. به مهربانی، عدالت خواهی و انسان دوستی معروف بود. با کمک ژوگه لیانگ و برادرانش به قدرت رسید. در زمان هرج و مرج به دنبال احیای نظم و اخلاق بود. با وجود ضعف نظامی با حمایت مردم رشد کرد.",
        caocao:"فرمانده شاعر و سیاست مداری قدرتمند در چین باستان. پایه گذار پادشاهی وی و یکی از مهره های کلیدی سه پادشاهی. باذکاوت، بی رحمی قدرت طلبی شناخته می شود. شخصیتی پیچیده، هم مورد احترام و هم مورد انتقاد دارد.",
        sunkuan:"فرمانروای پادشاهی وو در جنوب چین بود. پس از مرگپدر و برادرش قدرت را به دست گرفت. رهبری باهوش، خویشتندار و واقع گرا بود. تحت فرمانروایی او وو به قدرتی پایدار تبدیل شد."
    },
    music:{
        jogeliang:"./jm.mp3",
        liubey:"./lm.mp3",
        caocao:"./cm.mp3",
        sunkuan:"./sm.mp3"
    }
}

const jogeliangbtn=document.querySelector(".j");
const liubeybtn=document.querySelector(".l");
const caocaobtn=document.querySelector(".c");
const sunkuanbtn=document.querySelector(".s");
const picture=document.querySelector(".picture");
const matn=document.querySelector(".matn");
const audio=document.querySelector("audio")

jogeliangbtn.addEventListener("click",()=>{
    picture.style.backgroundImage=`url(${data.pictures.jogeliang})`
    matn.innerHTML=data.matns.jogeliang;
    audio.src=data.music.jogeliang;
    audio.play()
})
caocaobtn.addEventListener("click",()=>{
    picture.style.backgroundImage=`url(${data.pictures.caocao})`
    matn.innerHTML=data.matns.caocao;
    audio.src=data.music.caocao;
    audio.play()
})
liubeybtn.addEventListener("click",()=>{
    picture.style.backgroundImage=`url(${data.pictures.liubey})`
    matn.innerHTML=data.matns.liubey;
    audio.src=data.music.liubey;
    audio.play()
})
sunkuanbtn.addEventListener("click",()=>{
    picture.style.backgroundImage=`url(${data.pictures.sunkuan})`
    matn.innerHTML=data.matns.sunkuan;
    audio.src=data.music.sunkuan;
    audio.play()
})