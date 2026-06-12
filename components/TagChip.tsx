interface Props {
  tag: string;
}

export default function TagChip({ tag }: Props) {
  return (
    <button
        className="
            block
            m-1
            bg-white
            px-3
            py-1
            rounded
            border
            border-black
            text-[15px]
            tracking-[1.5px]
            text-black
            shadow-[1px_1px_0px_1px_rgba(0,0,0,0.7)]
            transition-all
            duration-200
            hover:-translate-y-1
            hover:shadow-[3px_3px_0px_1px_rgba(0,0,0,0.7)]
            active:translate-y-0
        "
        >
        {tag}
        </button>
  );
}