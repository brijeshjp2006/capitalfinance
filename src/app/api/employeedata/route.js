import { NextResponse } from 'next/server';
import { Query } from 'mysql';
import excuteQuery from '@/lib/db'
 
export async function GET() {

 const reactdata=await excuteQuery({
  'query':"SELECT * FROM employee",
  'values':[]
 })
 return NextResponse.json({ data:reactdata });
}