export function TechQuizHeads() {
    return (
      <div
        key={"dummy-content"}
        className="bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
      >
        <p className="text-center mb-10 text-white font-bold text-base md:text-xl"> 
          SOLO - &#8377; 70 &#124; TEAM - &#8377; 100
        </p>
        {/* <Image
          src="/images/supercoders.jpeg"
          alt="Macbook mockup from Aceternity UI"
          width={500}
          height={500}
          className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
        /> */}
        <p className=" pb-10 text-neutral-400 text-base md:text-xl font-sans max-w-3xl mx-auto">
        For any furthur queries please contact:
        </p>
        <div className="sm:flex justify-between">
          <p className=" pb-10 text-neutral-400 text-base md:text-xl font-sans max-w-3xl mx-auto">
            Event Head: Debajit Saha <br />
            Phone: +91 82400 64771 <br />
            Email: debajitsaha2004@gmail.com
          </p>
          <p className=" pb-10 text-neutral-400 text-base md:text-xl font-sans max-w-3xl mx-auto">
            Co-Event Head: Riddhi Lahiri <br />
            Phone: +91 82769 96824 <br />
            Email: riddhilahiri04@gmail.com
          </p>
        </div>
      </div>
    );
  };