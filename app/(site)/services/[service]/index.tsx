"use client"

import { PortableText } from '@portabletext/react';
import Icon from '../../components/Icon';

import useTranslation from "../../utils/useTranslation";
import { IService } from '@/types/Service';

interface Props {
  service: IService;
}

export default function Service({ service }: Props) {
  const { t } = useTranslation();

  return (
    <>
      <div className="w-full h-80 overflow-hidden relative">
      {service.icon && <Icon data={service.icon} width={40} height={40} /> }
      </div>
      <div className="container mx-auto py-10 md:py-20">
        <h1 className="text-3xl drop-shadow font-extrabold text-center">{t(service.name)}</h1>
        <div className="text-lg text-gray-700 mt-5">
          <PortableText value={t(service.content)} />
        </div>
      </div>
    </>
  );
}