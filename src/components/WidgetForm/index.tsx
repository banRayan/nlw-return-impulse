import { useState } from "react";

import { FeedbackSuccessStep } from "./Steps/FeedbackSuccessStep";
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";

import thoughtImageUrl from '../../assets/thought.svg';
import ideaImageUrl from '../../assets/idea.svg';
import bugImageUrl from '../../assets/bug.svg';

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
    const [feedbackSent, setFeedbackSent] = useState(false);

    const handleRestartFeedback = () => {
        setFeedbackSent(false);
        setFeedBackType(null);
    }

    return (
        <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
            {feedbackSent
                ? <FeedbackSuccessStep onFeedbackRestartRequested={handleRestartFeedback} />
                :(
                    <>
                        {!feedbackType 
                            ?(
                                <FeedbackTypeStep onFeedbackTypeChanged={setFeedBackType}/>
                            )
                            :(
                                <FeedbackContentStep 
                                    feedbackType={feedbackType}
                                    onFeedbackRestartRequested={handleRestartFeedback}
                                    onFeedbackSent={() => setFeedbackSent(true)}
                                />
                            )
                        }
                    </>
                )
            
            }

            <footer className="text-xs text-neutral-400">
                Feito pela <a className="underline underline-offset-2" href="https://rocketseat.com.br">Rocketseat</a>
            </footer>
        </div>
    )
}