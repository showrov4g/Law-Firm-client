import React from "react";
import image from "../assets/image/faq.jpg";

const Faq = () => {
  return (
    <div className="grid lg:grid-cols-2  gap-5 my-20">
      <div className="rounded-lg">
        <img className="rounded-lg" src={image} alt="" />
      </div>
      <div className="space-y-1">
        <h4 className="text-xl font-bold text-[#B68C5A]">FAQ</h4>
        <h1 className="text-4xl font-bold ">We Have All Legal Answers Here</h1>
        <div className="collapse collapse-plus bg-base-200">
          <input type="radio" name="my-accordion-3" defaultChecked />
          <div className="collapse-title text-xl font-medium">
          What we have similar cases?
          </div>
          <div className="collapse-content">
            <p>Pellentesque venenatis luctus leo eget vulputate. In suscipit ligula pulvinar feugiat viverra. Aliquam mollis blandit posuere. Ut eget magna arcu. Nam congue lectus eros. Suspendisse id purus euismod, ultricies neque non, commodo ligula.</p>
          </div>
        </div>
        <div className="collapse collapse-plus bg-base-200">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl font-medium">
          What is your legal experience level?
          </div>
          <div className="collapse-content">
            <p>Pellentesque venenatis luctus leo eget vulputate. In suscipit ligula pulvinar feugiat viverra. Aliquam mollis blandit posuere. Ut eget magna arcu. Nam congue lectus eros. Suspendisse id purus euismod, ultricies neque non, commodo ligula.</p>
          </div>
        </div>
        <div className="collapse collapse-plus bg-base-200">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl font-medium">
          How do initial consultations work?
          </div>
          <div className="collapse-content">
            <p>Pellentesque venenatis luctus leo eget vulputate. In suscipit ligula pulvinar feugiat viverra. Aliquam mollis blandit posuere. Ut eget magna arcu. Nam congue lectus eros. Suspendisse id purus euismod, ultricies neque non, commodo ligula.</p>
          </div>
        </div>
        <div className="collapse collapse-plus bg-base-200">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl font-medium">
          How will you update me on progress?
          </div>
          <div className="collapse-content">
            <p>Pellentesque venenatis luctus leo eget vulputate. In suscipit ligula pulvinar feugiat viverra. Aliquam mollis blandit posuere. Ut eget magna arcu. Nam congue lectus eros. Suspendisse id purus euismod, ultricies neque non, commodo ligula.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
