import React from "react";
import { useDocumentTitle } from "../../Hooks/useDocumetTitle";
import "./NotFound.css";

const NotFound = () => {

  useDocumentTitle("notFound")

  return (
    <main className="main404-container  ">
      <h2 className="Page404-heading f-l font-xl mb-l p-s">Page not found</h2>
      <div className="flex flex-center">
        <div className="Page404-cont ">
          <img
            src="https://res.cloudinary.com/aniket-singh/image/upload/v1650770954/Images/undraw_page_not_found_re_e9o6_ryedk6.svg"
            alt="page-404"
            className="page404-Img"
          />
        </div>
      </div>
    </main>
  );
};

export default NotFound;
