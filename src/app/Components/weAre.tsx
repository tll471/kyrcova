export function WeAre()
{
    return(
        <div className="flex flex-col mt-40 justify-center gap-10 sm:flex-row">
            <div className="flex flex-col px-4 sm:px-0">
                <p className="font-inter font-semibold text-[50px] leading-none tracking-normal">Contact Us</p>
                <p className="font-inter font-semibold text-[20px] leading-none tracking-normal mt-5 mb-5">Contact our team for support, orders, and inquiries</p>
                <div className="bg-[#FACC15] w-[140px] h-[40px] font-inter text-xl font-semibold leading-none rounded-[10px] flex items-center justify-center">Learn more</div>
            </div>

            <div className="w-[670px] h-[410px] rounded-[20px] overflow-hidden shadow-lg">
                <iframe className="w-full h-full" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2747.8!2d30.7233!3d46.4825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c6319f2b1f1a3b%3A0x0!2sOdesa!5e0!3m2!1sen!2sua!4v0000000000000"/>
            </div>

            <img src="/pictures/weare.png" alt="robot" />
        </div>
    )
}
