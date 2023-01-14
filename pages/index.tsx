import type { NextPage } from "next";
const Home: NextPage = () => {
  return <div>공사중</div>;
};
export default Home;
// import { useState } from "react";
// import Header from "../src/components/Header/Header";
// import SettlementProductList from "../src/components/SettlementProductList/SettlementProductList";
// import Selection from "../src/components/Selection/Selection";
// import type {
//   SettlementSearchProps,
//   SettlementReceiveDatas,
//   SettlementReceiveAllData,
// } from "../src/Types/SettlementPriceType";
// import type {
//   RealTimeReceiveDatas,
//   RealTimeReceiveAllData,
// } from "../src/Types/RealTimePriceType";
// import { getSettlementPrice } from "../src/api/settlementPrice";
// import { getRealTimePirce } from "../src/api/realTimePrice";
// import RealTimeProductList from "../src/components/RealTimeProductList/RealTimeProductList";
// import ScrollToTop from "../src/components/ScrollToTop/ScrollToTop";
// import ErrorState from "../src/components/ErrorState/ErrorState";

// interface SearchDataProps {
//   pageNo: string;
//   date: string;
//   market: string;
//   product: string;
//   company: string;
// }

// const Home: NextPage = () => {
//   const [settlementProductList, setSettlementProductList] = useState<
//     SettlementReceiveDatas[]
//   >([]);
//   const [realtimeProductList, setRealTimeProductList] = useState<
//     RealTimeReceiveDatas[]
//   >([]);
//   const [currentTab, setCurrentTab] = useState("정산 가격 정보");
//   const [isLoading, setIsLoading] = useState(false);
//   const [isSearchError, setIsSearchError] = useState(false);
//   const [message, setMessage] = useState("");

//   const [errorStatus, setErrorStatus] = useState({
//     errorCode: "",
//     errorMessage: "",
//   });

//   const getCurrentTab = (header: string) => {
//     if (header === "정산 가격 정보") {
//       setSettlementProductList([]);
//     } else {
//       setRealTimeProductList([]);
//     }
//     setIsSearchError(false);
//     setMessage("");
//     setCurrentTab(header);
//   };

//   const searchButtonClick = ({
//     date,
//     market,
//     company,
//     product,
//   }: SettlementSearchProps) => {
//     const searchDataObject = {
//       pageNo: "1",
//       date,
//       market,
//       product,
//       company,
//     };
//     if (currentTab === "정산 가격 정보") {
//       setSettlementProductList([]);
//       setMessage("");
//       setIsLoading(true);
//       settlementPrice(searchDataObject);
//     } else {
//       setRealTimeProductList([]);
//       setMessage("");
//       setIsLoading(true);
//       realTimePrice(searchDataObject);
//     }
//   };

//   const settlementPrice = async ({
//     pageNo,
//     date,
//     market,
//     product,
//     company,
//   }: SearchDataProps) => {
//     try {
//       const getData: SettlementReceiveAllData = await getSettlementPrice({
//         pageNo,
//         saleDate: date,
//         whsalCd: market,
//         cmpCd: company,
//       });

//       if (getData.hasOwnProperty("data")) {
//         setIsSearchError(false);
//         if (getData.data.length === 0) {
//           setIsLoading(false);
//           setMessage("검색 결과가 없습니다!");
//           return;
//         }
//         const target = getData.data.filter((data) =>
//           data.smallName.includes(product)
//         );
//         setSettlementProductList((prev) => [...prev, ...target]);

//         const quotient = Math.ceil(getData.totCnt / 1000);
//         if (pageNo === "1") {
//           if (quotient > 1) {
//             for (let i = 2; i <= quotient; i++) {
//               await settlementPrice({
//                 pageNo: `${i}`,
//                 date,
//                 market,
//                 product,
//                 company,
//               });
//             }
//           }
//         }

//         if (pageNo === quotient.toString()) {
//           setIsLoading(false);
//         }
//       } else {
//         setIsSearchError(true);
//         setErrorStatus({
//           errorCode: getData.errorCode,
//           errorMessage: getData.errorText,
//         });
//         setIsLoading(false);
//       }
//     } catch (error) {
//       console.log("selection error", error);
//     }
//   };

//   const realTimePrice = async ({
//     pageNo,
//     date,
//     market,
//     product,
//     company,
//   }: SearchDataProps) => {
//     try {
//       const getData: RealTimeReceiveAllData = await getRealTimePirce({
//         pageNo,
//         whsalCd: market,
//         cmpCd: company,
//       });

//       if (getData.hasOwnProperty("data")) {
//         setIsSearchError(false);
//         const target = getData.data.filter((data) =>
//           data.smallName.includes(product)
//         );
//         setRealTimeProductList((prev) => [...prev, ...target]);

//         const quotient =
//           getData.data.length === 0 ? 1 : Math.ceil(getData.totCnt / 1000);
//         if (pageNo === "1") {
//           if (quotient > 1) {
//             for (let i = 2; i <= quotient; i++) {
//               await realTimePrice({
//                 pageNo: `${i}`,
//                 date,
//                 market,
//                 product,
//                 company,
//               });
//             }
//           }
//         }

//         if (pageNo === quotient.toString()) {
//           setIsLoading(false);
//           if (target.length === 0) {
//             setMessage("검색 결과가 없습니다!");
//           }
//         }
//       } else {
//         setIsSearchError(true);
//         console.log(getData);
//         setErrorStatus({
//           errorCode: getData.errorCode,
//           errorMessage: getData.errorText,
//         });
//         setIsLoading(false);
//       }
//     } catch (error) {
//       console.log("error", error);
//     }
//   };

//   const handleToTopButtonClick = () => {
//     if (!window.scrollY) return;

//     window.scrollTo({
//       top: 0,
//       behavior: "smooth",
//     });
//   };

//   return (
//     <div>
//       <Header currentPage="정산 가격 정보" getCurrentTab={getCurrentTab} />
//       <Selection
//         currentTab={currentTab}
//         searchButtonClick={searchButtonClick}
//         isLoading={isLoading}
//       />
//       {currentTab === "정산 가격 정보" ? (
//         <>
//           <SettlementProductList
//             products={settlementProductList}
//             isLoading={isLoading}
//             message={message}
//           />
//           {settlementProductList.length > 0 && (
//             <ScrollToTop handleToTopButtonClick={handleToTopButtonClick} />
//           )}
//         </>
//       ) : (
//         <>
//           <RealTimeProductList
//             products={realtimeProductList}
//             isLoading={isLoading}
//             message={message}
//           />
//           {realtimeProductList.length > 0 && (
//             <ScrollToTop handleToTopButtonClick={handleToTopButtonClick} />
//           )}
//         </>
//       )}
//       {isSearchError && (
//         <ErrorState
//           errorCode={errorStatus.errorCode}
//           errorMessage={errorStatus.errorMessage}
//         />
//       )}
//     </div>
//   );
// };

// export default Home;
