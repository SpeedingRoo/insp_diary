import Head from "next/head";
import Card from "../components/card/Card";
import AddProperty from "../components/addProperty/AddProperty";
import styles from "../styles/Home.module.css";
import {useState} from 'react';

export default function Home() {
  let propertyList = {
    properties: [
      {
        date: "12/02/2022",
        address: "Unit 1, Number 2 The Very Luxurious Street",
        suburb: "Expensive",
        postcode: "8888",
        price: "9,650,000",
        agent: "Hocking fucking Stuart",
        sale_type: "private",
      },
      {
        date: "28/02/2022",
        address: "Unit 56, Number 108 The Very Luxurious Street",
        suburb: "Cheap",
        postcode: "3333",
        price: "500,000",
        agent: "Hocking fucking Stuart",
        sale_type: "private",
      },
      {
        date: "02/03/2022",
        address: "Unit 43, Number 211 The Very Luxurious Street",
        suburb: "Middle Class",
        postcode: "6666",
        price: "900,000",
        agent: "Hocking fucking Stuart",
        sale_type: "private",
      },
      {
        date: "11/04/2022",
        address: "Unit 3, Number 8725 The Very Luxurious Street",
        suburb: "Expensive",
        postcode: "8888",
        price: "150,000,000",
        agent: "Hocking fucking Stuart",
        sale_type: "private",
      },
    ],
  };

  let [data,setData] = useState(propertyList.properties);
  let [showModal,setShowModal] = useState(false);;
let [counter,setCounter] = useState(0);

  const toggleModal = ()=>{
    setShowModal(!showModal);
  }

  const removeProperty = (item)=>{
    //data is an array containing 4 objects
    console.log("data is : ");
    console.log(data);
    //
    console.log("Clicked ITEM address is: ")
    console.log(item.address)

    let newData = data.filter(i=>
      i.address!==item.address
    )

    setData(newData);
    setCounter(counter+1);

    console.log("counter is: " + counter);
    console.log("newData is: ")
    console.log(newData)


  }

  return (
    <div>
      <Head>
        <title>Inspection Diary</title>
        <meta
          name="inspection diary"
          content="help logging and sorting you inspection plans"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>
        <header className={styles.header}>
          <h1 className={styles.title}>Inspection Diary</h1>
        </header>
        <main className={styles.main}>
          {showModal?<AddProperty closeModal={toggleModal}/>:null}
          <div className={styles.grid}>
            {data.map((i)=>{
              return <Card key={i.address} info={i} onAdd={toggleModal} removeCard={removeProperty}/>
            }
            )}
          </div>
        </main>

        <footer className={styles.footer}>
          work of &nbsp;<span> Robert Wang</span>&nbsp; -{" "}
          {new Date().getFullYear()}
        </footer>
      </div>
    </div>
  );
}
