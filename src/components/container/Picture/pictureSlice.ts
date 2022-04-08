import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../../app/store";

export interface PictureState {
  id: number;
  src: string;
  name: string;
}

const initialState: Array<PictureState> = [
  {
    id: 1,
    src: "https://www.dungplus.com/wp-content/uploads/2019/12/girl-xinh-1-480x600.jpg",
    name: "Gai 1",
  },
  {
    id: 2,
    src: "https://vaithuhayho.com/wp-content/uploads/2021/03/anh-gai-dep-61.jpg",
    name: "Gai 2",
  },
  {
    id: 3,
    src: "https://dbk.vn/uploads/ckfinder/images/tranh-anh/anh-gai-xinh-2.jpg",
    name: "Gai 3",
  },
  {
    id: 4,
    src: "https://freenice.net/wp-content/uploads/2021/09/Hinh-anh-gai-xinh-deo-kinh-1.jpg",
    name: "Gai 4",
  },
  {
    id: 5,
    src: "https://tophinhanh.com/wp-content/uploads/2022/01/58_anh-gai-xinh-de-thuong-2k1-2k4-2k5-2k7-cute-nhat-564x375.jpg",
    name: "Gai 5",
  },
  {
    id: 6,
    src: "https://haycafe.vn/wp-content/uploads/2022/02/Tai-anh-gai-xinh-Viet-Nam-de-thuong.jpg",
    name: "Gai 6",
  },
  {
    id: 7,
    src: "https://bigdata-vn.com/wp-content/uploads/2021/10/1634768075_418_Hinh-anh-gai-xinh-de-thuong-cute-va-dang-yeu.jpg",
    name: "Gai 7",
  },
  {
    id: 8,
    src: "https://i.pinimg.com/564x/f7/a5/48/f7a5489830eef765b2ba8bc77f66e25d.jpg",
    name: "Gai 8",
  },
];

export const pictureSlice = createSlice({
  name: "picture",
  initialState,

  reducers: {
    addPicture: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { addPicture } = pictureSlice.actions;

export const selectPicture = (state: RootState) => state.picture;

export default pictureSlice.reducer;
