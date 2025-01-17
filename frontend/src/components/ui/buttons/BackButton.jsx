import { useNavigate } from "react-router";
import { ArrowLeft } from "lucide-react";

function BackButton() {
  const navigate = useNavigate();
  return (
    <section className="mb-5 mx-auto max-w-5xl">
      <button className="flex gap-1 items-center" onClick={() => navigate(-1)}>
        <span>
          <ArrowLeft size={20} color="#000000" />
        </span>
        <span>Back</span>
      </button>
    </section>
  );
}

export default BackButton;
