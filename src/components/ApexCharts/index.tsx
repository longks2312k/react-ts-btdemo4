import React, { useContext, useEffect, useState, FC } from 'react'
import ReactApexChart from 'react-apexcharts';
import { ThemeContext } from '../../contexts/ThemeContext'
import { getBills } from '../../services';
import { BillsResponse } from '../../types';
import './style.css'

type Props = {
  activeReq: boolean;
  setActiveReq: (active: boolean) => void;
};

const ApexCharts: FC<Props> = ({activeReq, setActiveReq}) => {
  const { itemColor } = useContext(ThemeContext)
  const [totalList,setTotalList] = useState<Array<number>>([])
  const [nameList,setNameList] = useState<Array<string>>([])

  console.log(nameList)

  useEffect(() => {
    const callGetProductList = async () => {
      try {
          const response = await getBills();
          const total = response.data.map((e: BillsResponse) => e.totalPiece)
          const name = response.data.map((e: BillsResponse) => e.customerName)
          setTotalList(total);
          setNameList(name);
          setActiveReq(true);
      } catch (error) {
          console.error(error);
      }
    }
    callGetProductList()
  },[activeReq]);

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
