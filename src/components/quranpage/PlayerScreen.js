import { useEffect } from "react";
import ReactPlayer from "react-player";

const PlayerScreen = ({ chapterDetail }) => {
  const audiLink = (number) =>
    number < 10
      ? "https://aatry1000.s3.amazonaws.com/Quran/00" + number + ".mp3"
      : "https://aatry1000.s3.amazonaws.com/Quran/0" + number + ".mp3";

  useEffect(() => {}, [chapterDetail]);

  return (
    <div className='h-100 shadow-lg p-3 bg-red'>
      <h1 className='fs-5 fw-bold r'>Player</h1>
      {chapterDetail !== null ? (
        <ul className='list-group text-end'>
          <div>
            <li
              className={`list-group-item bg-transparent  d-flex justify-content-between fs-6`}
            >
              <span className='fw-bold'>Suuradda af Carabiga : </span>{" "}
              <span>{chapterDetail.name_arabic}</span>
            </li>
            <li
              className={`list-group-item bg-transparent d-flex justify-content-between fs-6`}
            >
              <span className='fw-bold'>Suuradda af Ingiriisi : </span>{" "}
              <span>{chapterDetail.name_complex}</span>
            </li>
            <li
              className={`list-group-item bg-transparent d-flex justify-content-between fs-6`}
            >
              <span className='fw-bold'>Meeshay ku soo Degtay : </span>{" "}
              <span>{chapterDetail.revelation_place}</span>
            </li>
            <li
              className={`list-group-item bg-transparent  d-flex justify-content-between fs-6`}
            >
              <span className='fw-bold'>Magaca Macnahiis : </span>{" "}
              <span>{chapterDetail.translated_name.name}</span>
            </li>

            <div className='div '>
              <ReactPlayer
                url={audiLink(chapterDetail.id)}
                controls={true}
                playing={true}
                width='100%'
                height='60px'
              />
            </div>
          </div>
        </ul>
      ) : (
        <div className=' bg-red list-group-item home-body2'>
          <span className='fw-bold'>Suuradda af Carabiga : </span> <br></br>
          <span className='fw-bold'>Suuradda af Ingiriisi: </span> <br></br>
          <span className='fw-bold'>Meeshay ku soo Degtay: </span> <br></br>
          <span className='fw-bold'>Magaca Macnahiis: </span> <br></br>
        </div>
      )}
    </div>
  );
};

export default PlayerScreen;
