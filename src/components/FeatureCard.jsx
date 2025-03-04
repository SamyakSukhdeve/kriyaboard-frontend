const FeatureCard = ({ title, subTitle, icon }) => {
  return (
    <div className="p-1 xl:p-2  bg-[#F2F9FF] rounded-lg space-y-2 flex flex-col items-center">
      <div className="p-2 bg-amber-200 rounded">
        <img src={icon} className="h-5  " alt="" />
      </div>
      <h3 className="font-medium text-black text-[14px] sm:text-[16px] text-center">{title}</h3>
      <p className="text-muted-foreground text-black text-[11px] sm:text-[13px] text-center">
        {subTitle}
      </p>
    </div>
  );
};

export default FeatureCard;
