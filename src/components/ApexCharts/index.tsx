import React, { useContext, useEffect, useState, FC } from 'react'
import ReactApexChart from 'react-apexcharts';
import { ThemeContext } from '../../contexts/ThemeContext'
import './style.css'

type Props = {
  activeReq: boolean;
  setActiveReq: (active: boolean) => void;
};

const ApexCharts: FC<Props> = ({activeReq, setActiveReq}) => {
  const { itemColor } = useContext(ThemeContext)
  const [totalList,setTotalList] = useState([])
  const [nameList,setNameList] = useState([])

  useEffect(() => {
    fetch('https://62577fc1c870a2149784f102.mockapi.io/api/v1/bills')
    .then(response => response.json())
    .then(data => {
      const totalList = data.map((e: any) => e.totalPiece)
      const name = data.map((e: any) => e.name)
      setTotalList(totalList);
      setNameList(name);
    });
  },[]);
  
  useEffect(() => {
    if (!activeReq) {
      return;
    }
    fetch('https://62577fc1c870a2149784f102.mockapi.io/api/v1/bills')
    .then(response => response.json())
    .then(data => {
      if (data) {
        setActiveReq(false);
      }
      const totalList = data.map((e: any) => e.totalPiece)
      const name = data.map((e: any) => e.name)
      setTotalList(totalList);
      setNameList(name);
    });
  },[activeReq])

  const series = [
    {
      name: 'Total Piece',
      data: totalList
    }];
  const options: any = {
    chart: {
      height: 350,
      type: 'area'
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth'
    },
  }

  return (
    <div style={{backgroundColor:`${itemColor}`}} className='apex-charts'>
      <ReactApexChart options={options} series={series} type="area" height={350} />
    </div>
  )
}

export default ApexCharts;
