import type { ReactNode } from "react";

function SectionTitle({
    mainTitle,
    innerTitle,
    description,
}: {
    mainTitle: ReactNode;
    innerTitle?: ReactNode;
    description?: ReactNode;
}) {
    return (
        <div className="mx-auto max-w-4xl text-center">
            {
                innerTitle && (
                    <div className="flex items-center justify-center gap-4">
                        <span className="h-px w-16 bg-[#d9a55b] sm:w-28" />
                        <p className="text-sm font-medium uppercase tracking-[0.25em] text-[#d9a55b]">
                            {innerTitle}
                        </p>
                        <span className="h-px w-16 bg-[#d9a55b] sm:w-28" />
                    </div>
                )
            }

            {
                <h2 className="mt-4 font-[family-name:var(--font-serif)] text-4xl font-bold leading-tight sm:text-5xl lg:text-5xl">
                    {mainTitle}
                </h2>
            }

            {
                description && (
                    <p className="mx-auto mt-6 max-w-2xl  text-base leading-relaxed text-white/85">
                        {description}
                    </p>
                )
            }
        </div>
    )
}


const ColorFullTitleText = ({ content }: { content: ReactNode }) => {
    return (
        <span className=" text-[#e0a85c]">{content}</span>
    )
}

export {
    SectionTitle,
    ColorFullTitleText,
    // NormalTitleText,
}