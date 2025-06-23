'use client'
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useAppContext } from "@/lib/AppContext";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BiChevronRight } from "react-icons/bi";

interface HeaderWithButtonsProps {
  heading: string;
  description: string;
  descriptionHtml?: any;
  buttonPrimary?: string;
  buttonPrimaryLink?: string;
  buttonSecondary?: string;
  buttonSecondaryLink?: string;
  buttonSecondaryRegistration?: boolean;
  image: string;
  imageHeight?: number;
  imageWidth?: number;
  badge?: string;
}
export default function HeaderWithButtons(props: HeaderWithButtonsProps) {
  const {context, setContext} = useAppContext();
  return (
    <header className="container my-10 flex justify-between">
      <div className="flex-col max-w-[560px] flex gap-4">
        {props.badge && (
          <span className="badge text-xs bg-Primary-Shade_6 !text-Primary-Shade_2 !border-Primary-Shade_2">
            {props.badge}
          </span>
        )}

        <h1 className="heading-1">{props.heading}</h1>
        <p className="text-Black-Shade_-2  font-[500]">{props.description}</p>
        {props.descriptionHtml && props.descriptionHtml}
        <div className="flex gap-4">
          {props.buttonPrimary && !props.buttonPrimaryLink && (
            <button className="btn-primary border border-Primary-Shade_1"
              onClick={() => setContext({...context, showRegisterModal: true})}
            >
              {props.buttonPrimary}
            </button>
          )}
          {props.buttonPrimary && props.buttonPrimaryLink && (
            <Link className="btn-primary border border-Primary-Shade_1"
              href={props.buttonPrimaryLink}
            >
              {props.buttonPrimary}
            </Link>
          )}
          {props.buttonSecondary && !props.buttonSecondaryLink && (
            <button className="btn-secondary flex gap-1 items-center"
            onClick={() => {
              if(props.buttonSecondaryRegistration){
                setContext({...context, showRegisterModal: true})
              }
            }}
            >
              {props.buttonSecondary}
              <BiChevronRight size={24} />
            </button>
          )}
          {props.buttonSecondary && props.buttonSecondaryLink && (
            <Link className="btn-secondary flex gap-1 items-center"
              href={props.buttonSecondaryLink}
            >
              {props.buttonSecondary} <BiChevronRight size={24} />
            </Link>
          )}
        </div>
      </div>
      {props.image && (
        <div>
          <Image
            src={props.image}
            height={props.imageHeight ?? 262}
            width={props.imageWidth ?? 433}
            alt=""
            quality={100}
          />
        </div>
      )}
    </header>
  );
}
