const HeroSection = () => {
    return (
        // <div>
        //    {/* <img classNameName=" h-44 lg:h-full" src="../img/hero1.png" alt="" /> */}
        //    <img classNameName=" h-44 w-full lg:h-full" src="../img/h.jpg" alt="" />
        // </div>
        <div className=" bg-gray-50 flex items-center">
            <section className="w-full h-full bg-cover bg-center py-[190px]" style={{backgroundImage: "url('../img/image.png')"}}>
            </section>
        </div>
    );
}

export default HeroSection;
