import React from "react";
import { ArrowLeft, ArrowRight } from "./Icons";
import './Arrow.css'

function Arrow({prev, onClick }) {
  return (
    <button
      type="button"
      data-role="none"
      className={"arrow " + (prev ? "arrow-prev" : "arrow-next")}
      onClick={onClick}
    >
      {prev ? <ArrowLeft /> : <ArrowRight />}
    </button>
  );
}

export default Arrow;
