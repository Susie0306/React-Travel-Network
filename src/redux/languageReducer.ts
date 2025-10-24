import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface LanguageState {
  language: "en" | "zh";
  languageList: { name: string, code: string }[];
}

const initialState: LanguageState = {
  language: "zh",
  languageList: [
    { name: "English", code: "en" },
    { name: "中文", code: "zh" },
  ],
};

const languageSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    changeLanguage: (state, action: PayloadAction<"en" | "zh">) => {
      state.language = action.payload;
      // 保存到localStorage，实现持久化
      localStorage.setItem('language', action.payload);
    },
    toggleLanguage: (state) => {
      // 在当前两种语言之间切换
      const newLanguage = state.language === 'zh' ? 'en' : 'zh';
      state.language = newLanguage;
      localStorage.setItem('language', newLanguage);
    },
    addLanguage: (state, action: PayloadAction<{ name: string; code: string }>) => {
      // 检查是否已存在相同的语言代码
      const exists = state.languageList.some(lang => lang.code === action.payload.code);
      if (!exists) {
        state.languageList.push(action.payload);
      }
    },
    removeLanguage: (state, action: PayloadAction<string>) => {
      // 不能删除当前正在使用的语言
      if (state.language === action.payload) {
        return;
      }
      state.languageList = state.languageList.filter(lang => lang.code !== action.payload);
    },
    initializeLanguage: (state) => {
      // 从localStorage恢复语言设置
      const savedLanguage = localStorage.getItem('language') as "en" | "zh" | null;
      if (savedLanguage && ["en", "zh"].includes(savedLanguage)) {
        state.language = savedLanguage;
      }
    }
  }
});

export const { 
  changeLanguage, 
  toggleLanguage, 
  addLanguage, 
  removeLanguage, 
  initializeLanguage 
} = languageSlice.actions;
export default languageSlice.reducer;