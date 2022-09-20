import type { NextPage } from "next";
import axios from "axios";

const Home: NextPage = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </div>
  );
};

//fetch data. getServerSideProps only uses to render a page whose data must be fetched at request time
export const getServerSideProps = async () => {
  const response = await axios.get(`http://localhost:3000/api/post`) // goes to api/post folder

  console.log(response.data.name)

  return {
    props: {}
  }
}

export default Home;
