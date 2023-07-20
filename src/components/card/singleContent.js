import { img_300, unavailable } from "../config/config";
import ContentModal from "../modal/ContentModal";
import "./singleContent.css";

const SingleContent = ({
  id,
  poster,
  title,
  date,
  media_type,
  vote_average,
}) => {
  return (
    <ContentModal media_type={media_type} id={id}>
      <img src={poster ? `${img_300}/${poster}` : unavailable} alt={title} />
      <em className="title">{title}</em>
      <b className="rate">{vote_average}⭐</b>
      <span className="subTitle">{date}</span>
    </ContentModal>
  );
};

export default SingleContent;
