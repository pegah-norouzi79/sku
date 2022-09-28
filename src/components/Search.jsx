import * as React from "react";
import Dialog from "@mui/material/Dialog";
import Slide from "@mui/material/Slide";
import { useSelector, useDispatch } from "react-redux";
import { toggleShowSearch } from "../features/searchSlice";
import { BsSearch } from "react-icons/bs";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Search() {
  const dispatch = useDispatch();
  const showSerach = useSelector((state) => state.search.show);
  return (
    <div>
      <Dialog
        open={showSerach}
        fullWidth={true}
        maxWidth="lg"
        TransitionComponent={Transition}
        keepMounted
        onClose={() => dispatch(toggleShowSearch())}
        aria-describedby="alert-dialog-slide-description"
      >
        <div className="m-2 pb-20 pt-3">
          <div className="flex bg-[#F0F0F1] flex-1 py-[0.70rem] rounded-lg px-2">
            <BsSearch className="text-gray-600 w-5 h-5" />
            <input
              className="yekanBold w-full text-sm bg-transparent px-2 outline-none placeholder:text-xs txet-[#222f3e]"
              type="text"
              placeholder="لطفا پروژه یا شخص مورد نظر خود را جستجو کنید"
            />
          </div>
        </div>
      </Dialog>
    </div>
  );
}
