import VideoCard from "../components/VideoCard";
import axios from "axios";
import { Video } from "../types";
import NoResults from "../components/NoResults"

interface IProps {
  videos: Video[] // an array of Video 
}

const Home = ({ videos }: IProps) => {
  console.log(videos);
  return (
    <div className="flex flex-col gap-10 videos h-full">
      {videos.length ? videos.map((video) => (
        <VideoCard post={video} key={video._id} />
      )) : (
          <NoResults text={'No Videos'} />
      )} 
    </div>
  );
};

//fetch data. getServerSideProps only uses to render a page whose data must be fetched at request time
export const getServerSideProps = async () => {
  const { data } = await axios.get(`http://localhost:3000/api/post`); // goes to api/post folder

  return {
    props: {
      videos: data,
    },
  };
};

export default Home;
