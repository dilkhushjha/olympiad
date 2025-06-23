/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import _ from "lodash";
import { useState, useEffect } from "react";
import React from "react";

export default function Faq({ paddingClass = "spacing-xy", pageName = "Fee Structure", slug="faq", data = [] }: any) {
  const [loading, setLoading] = useState(false);
  const [faqs, setFaqs] = useState(data);
    useEffect(() => {
      const fetchFaq = async () => {
        setLoading(true);
        try {
          const response = await fetch("/api/faq?slug="+slug, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          });
          if (response.ok) {
            const res = await response.json();
            const data = res.data;
            if(data.length !== 0){
              const structuredData = data.slice(0,10).map((item) => {
                return {
                  question: item.title,
                  answer: item.detail,
                };
              })
              setFaqs(structuredData)
            }
          }
        } catch (error) {
          console.error("Error fetching faq:", error);
        }finally{
          setLoading(false);
        }
      }
      if(data ==undefined || data.length === 0){
        fetchFaq();
      }
    }, []);
    
  return (
    <section className={`container ${paddingClass}`}>
      <h1 className="heading-1">Frequently Asked Questions</h1>
      <div className="flex justify-between mt-10">
        <span className="block font-bold max-w-[215px] border border-Secondary-Shade_4 rounded-lg px-4 py-2 h-fit text-Secondary-Shade_2 text-lg">{pageName}</span>
        <div className="max-w-[800px] w-full">{
          loading ? (
            <div className="flex justify-center items-center">
              <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-green-500"></div>
            </div>
          ): null}
          {
            !_.isEmpty(faqs) && faqs.map((item: {question: string, answer: string}, index)  => (
              <div key={index} className="collapse collapse-plus rounded-none border-b border-Grey-Shade_3 not:first:border-none">
                <input type="radio" name="my-accordion-3" defaultChecked={index === 0} />
                <div className="collapse-title text-lg font-semibold pt-5 collapse-open:text-green-500 ">
                  {item.question}
                </div>
                <div className="collapse-content">
                  <p dangerouslySetInnerHTML={{ __html: item.answer }}/>
                </div>
              </div>
            ))
          }
          
        </div>
      </div>
    </section>
  );
}
