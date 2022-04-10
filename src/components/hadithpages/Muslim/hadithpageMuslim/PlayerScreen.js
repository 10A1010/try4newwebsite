import { useEffect } from "react";
import ReactPlayer from "react-player";

const PlayerScreen = ({ chapterDetail }) => {
  const audiLink = (number) => number < 10 ? (
    "https://aatry1000.s3.amazonaws.com/Hadith/Muslim/0"+ number +"-Mukh-Saxiix-Muslim.mp3") : (

      "https://aatry1000.s3.amazonaws.com/Hadith/Muslim/"+ number +"-Mukh-Saxiix-Muslim.mp3")

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
              <span className='fw-bold'>Mukhtasar Saxiix Muslim</span>{" "}
            </li>

            <div className='div '>
              <ReactPlayer
                url={audiLink(chapterDetail)}
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
          <span className='fw-bold'><br></br>Mukhtasar Saxiix Muslim </span>{" "}<br></br>
        </div>
      )}
    </div>
  );
};

export default PlayerScreen;
