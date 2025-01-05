"use client";

import { Plus } from 'lucide-react';
import React from 'react';
import { ActionTooltip } from './action-tooltip';
import { useModal } from '@/hooks/useModalStore';

const NavigationAction = () => {
  const { onOpen} = useModal();


  return (
    <div>
      <ActionTooltip label='Add a Server'
      side="right"
      align='center'>
        <button
          onClick={()=>onOpen("createServer")}
          className='group flex item-center'
        >
          <div className='flex mx-3 h-[48px] w-[48px] rounded-[24px] group-hover:rounded-[16px] transition-all overflow-hidden items-center justify-center bg-[#E3E5E8] dark:bg-neutral-700 group-hover:bg-emerald-500'>
            <Plus 
              className='group-hover:text-foreground transition text-emerald-500'
              size={25}
            />
          </div>
        </button>
      </ActionTooltip>
    </div>
  )
}

export default NavigationAction