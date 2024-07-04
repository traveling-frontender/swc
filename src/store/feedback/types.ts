import { ComputedRef } from "vue"
export interface FormActions {
  name: string,
  phone: string,
  email: string,
  subject: string,
  message: string
}
export interface ResultActions {
  isLoading: ComputedRef<boolean>,
  data: object,
  error: object,
}