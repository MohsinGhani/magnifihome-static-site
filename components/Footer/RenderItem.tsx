import Link from "next/link";

const RenderItem = ({ heading, items }: any) => {
  return (
    <div className="text-center sm:text-left">
      <p className="text-lg font-medium text-gray-900">{heading}</p>
      <ul className="mt-8 space-y-4 text-sm list-none">
        {items?.map((item: any) => (
          <li key={item}>
            <Link
              className="flex items-center justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end underline"
              href={item?.link}
            >
              <span className="flex-1 text-gray-700">{item?.text}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RenderItem;
