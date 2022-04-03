import { useEffect } from "react";
import ReactPlayer from "react-player";

const PlayerScreen = ({ chapterDetail }) => {
  const audiLink = (number) =>
    "https://aatry1000.s3.amazonaws.com/Tafsiir/TafsiirAli/00" + number + "++alfaatixa.mp3";
  useEffect(() => {}, [chapterDetail]);

  return (
    <div className='h-100 shadow-lg p-3 bg-red'>
      <h1 className='fs-5 fw-bold r'>Player</h1> 
      {chapterDetail !== null ? (
        <ul className='list-group text-end'>
          <div>
            
            <li
              className={`list-group-item bg-transparent  d-flex justify-content-between fs-6`}
            ><br></br>
              <span className='fw-bold'>Tafsiir By Sheikh Muhammad Umar Dirir Ali</span>{" "}
            </li>

            <div className='div '>
              <ReactPlayer
                url={audiLink(chapterDetail.id)}
                controls={true}
                playing={true}
                width='100%'
                height='120px'
              />
            </div>
          </div>
        </ul>
      ) : (
        <div className=' bg-red list-group-item home-body2'>
          <span className='fw-bold'><br></br>Tafsiir By Sheikh Muhammad Umar Dirir Ali </span>{" "}<br></br>
        </div>
      )}
    </div>
  );
};

export default PlayerScreen;
