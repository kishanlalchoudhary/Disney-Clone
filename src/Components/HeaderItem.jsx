import PropTypes from "prop-types";

const HeaderItem = ({ Name, Icon }) => {
  return (
    <div className="text-white flex items-center gap-3 text-[15px] font-semibold cursor-pointer hover:underline underline-offset-8 decoration-2">
      <Icon className="text-[17px]" />
      <h2 className="">{Name}</h2>
    </div>
  );
};

HeaderItem.propTypes = {
  Name: PropTypes.string.isRequired,
  Icon: PropTypes.func.isRequired,
};

export default HeaderItem;
