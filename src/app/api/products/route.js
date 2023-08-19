import { NextResponse } from 'next/server';
import { Query } from 'mysql';
import excuteQuery from '@/lib/db'
 
export async function GET() {
 console.log('test')
 const reactdata=await excuteQuery({
  'query':"SELECT * FROM REACT",
  'values':[]
 })
 return NextResponse.json({ data:reactdata });
}