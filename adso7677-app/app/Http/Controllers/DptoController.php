<?php

namespace App\Http\Controllers;

use App\Models\Dpto;
use App\Http\Requests\StoreDptoRequest;
use App\Http\Requests\UpdateDptoRequest;

class DptoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreDptoRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreDptoRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Dpto  $dpto
     * @return \Illuminate\Http\Response
     */
    public function show(Dpto $dpto)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Dpto  $dpto
     * @return \Illuminate\Http\Response
     */
    public function edit(Dpto $dpto)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateDptoRequest  $request
     * @param  \App\Models\Dpto  $dpto
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateDptoRequest $request, Dpto $dpto)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Dpto  $dpto
     * @return \Illuminate\Http\Response
     */
    public function destroy(Dpto $dpto)
    {
        //
    }
}
