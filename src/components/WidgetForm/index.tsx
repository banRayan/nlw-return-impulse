import { useState } from "react";

import { CloseButton } from "../CloseButton"

import thoughtImageUrl from '../../assets/thought.svg';
import ideaImageUrl from '../../assets/idea.svg';
import bugImageUrl from '../../assets/bug.svg';
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";

export const feedbackTypes = {
    BUG:{
        title: 'Problema',
        image: {
            source: bugImageUrl,
            alt: 'Imagem de um inseto',
        }
    },
    IDEA: {
        title: 'Ideia',
        image: {
            source: ideaImageUrl,
            alt: 'imagem de uma lâmpada',
        }
    },
    OTHER:{
        title: 'Outro',
        image: {
            source: thoughtImageUrl,
            alt: 'Imagem de um balão de pensamento',
        }
    },
}
// Object.entries(feedbackTypes) => [ ['BUG', {...}], ['chave', {conteúdo}], [] ]

export type FeedbackType = keyof typeof feedbackTypes;

export const WidgetForm = () => {
    const [feedbackType, setFeedBackType] = useState<FeedbackType | null>(null);
    return (
        <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
            {!feedbackType 
                ?(
                    <FeedbackTypeStep onFeedbackTypeChanged={setFeedBackType}/>
                )
                :(
                    <FeedbackContentStep feedbackType={feedbackType}/>
                )
            }

            <footer className="text-xs text-neutral-400">
                Feito pela <a className="underline underline-offset-2" href="https://rocketseat.com.br">Rocketseat</a>
            </footer>
        </div>
    )
}