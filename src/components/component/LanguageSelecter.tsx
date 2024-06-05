import { SelectValue, SelectTrigger, SelectItem, SelectGroup, SelectContent, Select } from "@/components/ui/select"
import i18next from "i18next";

export function LanguageSelecter() {

  return (
    <Select value={i18next.language}>
      <SelectTrigger className="w-[100px]">
        <SelectValue placeholder="Select a language" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="en">English</SelectItem>
          <SelectItem value="fr">Français</SelectItem>
          <SelectItem value="ar">العربية</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}