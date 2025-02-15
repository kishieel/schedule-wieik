import { HrsEndConfig, HrsStartConfig } from '../common/configs/HrsConfig';
import { ClassTypeBg, ClassTypeSubject } from '../common/configs/TagsConfig';
import { ClassInterface } from '../interfaces/dayClassesInterface';

interface ClassBlockProps {
  classData: ClassInterface;
}

const ClassBlock = ({ classData }: ClassBlockProps) => {
  const { id, title, lecturer, room, start, end, type, group } = classData;
  return (
    <div
      className={`md:row-auto ${
        HrsStartConfig[start as keyof typeof HrsStartConfig]
      } ${
        HrsEndConfig[end as keyof typeof HrsEndConfig]
      } shadow p-2 bg-white border border-standardGrey flex flex-col justify-between`}
    >
      <div>
        <p
          className={`${
            ClassTypeSubject[id as keyof typeof ClassTypeSubject]
          } font-bold text-lg md:text-xl`}
        >
          {title}
        </p>
        <p className="text-darkGrey font-semibold text-base md:text-lg">
          {lecturer}
        </p>
      </div>
      <div className="flex flex-row justify-end">
        <div className="border border-darkGrey w-max px-2 py-1 rounded-lg font-semibold mr-2">
          {room}
        </div>
        {group ? (
          <div
            className={`${ClassTypeBg[type]} text-white w-max px-2 py-1 rounded-lg font-bold justify-center items-center`}
          >
            {group}
          </div>
        ) : (
          <div
            className={`${ClassTypeBg[type]} text-white w-max px-2 py-1 rounded-lg font-bold flex justify-center items-center`}
          >
            {type.toUpperCase()}
          </div>
        )}
      </div>
    </div>
  );
};

export default ClassBlock;
